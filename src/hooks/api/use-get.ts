import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface UseGet<T> {
  recordName: string;
  recordQuery: {};
  // recordParams?: string;
  IsFetch: boolean;
  fetchRecord: (fetchArgs?: any) => Promise<T>;
}

function useGet<T>({
  recordName,
  recordQuery,
  // recordParams = "",
  IsFetch,
  fetchRecord,
}: UseGet<T>) {
  const {
    data,
    isFetching,
    isError,
    error,
    isSuccess,
    failureReason,
    isLoading,
  } = useQuery<T, AxiosError>({
    queryKey: [recordName, recordQuery],
    // queryFn: () => (recordParams ? fetchRecord(recordParams) : fetchRecord()),
    queryFn: () => fetchRecord(recordQuery),
    enabled: IsFetch,
    retry: 0,
    refetchOnWindowFocus: false,
    // keepPreviousData: true,
  });

  return {
    data,
    isFetching,
    isError,
    error,
    isSuccess,
    isLoading,
    failureReason,
  };
}

export default useGet;
