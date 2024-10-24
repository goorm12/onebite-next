import ClientComponent from "@/components/client-component";
type PropsType = {
  searchParams: {
    q?: string;
  };
};

export default function Page({ searchParams }: PropsType) {
  return (
    <div>
      Search 페이지 {searchParams.q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
