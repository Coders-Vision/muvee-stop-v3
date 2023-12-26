import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Container from "@/layout/container";

function ShowLoading() {
  return (
    <>
      <section>
        <Skeleton className="w-full h-auto aspect-[16/9] md:aspect-[2.7/1] object-cover" />
      </section>
      <section>
        <Container>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="sm:flex gap-6 mt-20 mx-4  sm:max-w-md sm:mx-auto  lg:max-w-none">
              <div className=" md:flex-shrink-0 ">
                <Skeleton className="h-[400px] w-[300px] rounded-xl my-4" />
              </div>
              <div className="hidden lg:block mx-2">
                <Skeleton className="h-8 rounded-xl my-4" />
                <Skeleton className="h-4 w-52 rounded-xl my-4" />
                <Skeleton className="h-4 w-96 rounded-xl my-4" />
                <Skeleton className="h-4 w-80 rounded-xl my-4" />
                <Skeleton className="h-4 w-72 rounded-xl my-4" />
                <div className="flex gap-4 ">
                  <div className="">
                    <Skeleton className="h-4 w-28 rounded-xl my-4" />
                    <Skeleton className="h-4 w-28 rounded-xl my-4" />
                    <Skeleton className="h-4 w-28 rounded-xl my-4" />
                    <Skeleton className="h-4 w-28 rounded-xl my-4" />
                    <Skeleton className="h-4 w-28 rounded-xl my-4" />

                    <Skeleton className="h-4 w-28 rounded-xl my-4" />
                  </div>
                  <div className="">
                    <Skeleton className="h-4 w-28 rounded-xl my-4" />
                    <Skeleton className="h-4 w-28 rounded-xl my-4" />
                    <Skeleton className="h-4 w-28 rounded-xl my-4" />
                    <Skeleton className="h-4 w-28 rounded-xl my-4" />
                    <Skeleton className="h-4 w-28 rounded-xl my-4" />
                    <Skeleton className="h-4 w-28 rounded-xl my-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:mt-24 my-4 mx-4 w-full md:w-[600px] lg:w-[400px]">
              <Skeleton className="h-6 w-40 rounded-xl my-4 ml-2" />
              <div className="px-4 py-2">
                <Card className=" mt-2 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 rounded-xl">
                  <CardContent className="p-0 ">
                    <div className="flex">
                      <div className="rounded-xl">
                        <Skeleton className="h-[100px] w-[75px] rounded-xl my-4 mx-4" />
                      </div>
                      <div className="mx-2 my-2">
                        <Skeleton className="h-4 w-48 rounded-xl my-4" />
                        <Skeleton className="h-2 w-28 rounded-xl my-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className=" mt-2 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 rounded-xl">
                  <CardContent className="p-0 ">
                    <div className="flex">
                      <div className="rounded-xl">
                        <Skeleton className="h-[100px] w-[75px] rounded-xl my-4 mx-4" />
                      </div>
                      <div className="mx-2 my-2">
                        <Skeleton className="h-4 w-48 rounded-xl my-4" />
                        <Skeleton className="h-2 w-28 rounded-xl my-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className=" mt-2 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 rounded-xl">
                  <CardContent className="p-0 ">
                    <div className="flex">
                      <div className="rounded-xl">
                        <Skeleton className="h-[100px] w-[75px] rounded-xl my-4 mx-4" />
                      </div>
                      <div className="mx-2 my-2">
                        <Skeleton className="h-4 w-48 rounded-xl my-4" />
                        <Skeleton className="h-2 w-28 rounded-xl my-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className=" mt-2 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 rounded-xl">
                  <CardContent className="p-0 ">
                    <div className="flex">
                      <div className="rounded-xl">
                        <Skeleton className="h-[100px] w-[75px] rounded-xl my-4 mx-4" />
                      </div>
                      <div className="mx-2 my-2">
                        <Skeleton className="h-4 w-48 rounded-xl my-4" />
                        <Skeleton className="h-2 w-28 rounded-xl my-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* <section>
        <Container>Loading</Container>
      </section> */}
    </>
  );
}

export default ShowLoading;
