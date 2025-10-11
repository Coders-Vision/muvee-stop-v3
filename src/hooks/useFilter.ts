import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface UseFilterConfig<T> {
  paramKey: string;
  initialValue?: T;
  transform?: {
    toString: (value: T) => string;
    fromString: (value: string) => T;
  };
  onFilterChange?: (value: T) => void;
}

function useFilter<T>({
  paramKey,
  initialValue,
  transform,
  onFilterChange,
}: UseFilterConfig<T>) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getCurrentValue = (): T => {
    const param = searchParams.get(paramKey);
    if (!param) return initialValue as T;
    
    if (transform) {
      return transform.fromString(param);
    }
    
    return param as unknown as T;
  };

  const setValue = (value: T) => {
    const current = new URLSearchParams(searchParams.toString());
    
    if (value === undefined || value === null || (Array.isArray(value) && value.length === 0)) {
      current.delete(paramKey);
    } else {
      const stringValue = transform ? transform.toString(value) : String(value);
      current.set(paramKey, stringValue);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";
    
    router.push(`${pathname}${query}`);
    
    if (onFilterChange) {
      onFilterChange(value);
    }
  };

  const resetValue = () => {
    const current = new URLSearchParams(searchParams.toString());
    current.delete(paramKey);
    
    const search = current.toString();
    const query = search ? `?${search}` : "";
    
    router.push(`${pathname}${query}`);
    
    if (onFilterChange && initialValue !== undefined) {
      onFilterChange(initialValue);
    }
  };

  return {
    value: getCurrentValue(),
    setValue,
    resetValue,
  };
}

export default useFilter;
