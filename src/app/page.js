import { Button } from "antd";
import Link from "next/link";
import Header from "./Header/page";

export default function Home() {

  return (


    <div>
      <Header/>
      <h1 className="text-center mt-2">Home Page</h1>
      <Button>
        <Link href="/admin">admin</Link>
      </Button>
    </div>

  );
}
