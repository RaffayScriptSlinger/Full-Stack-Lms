import { Button } from "antd";
import Link from "next/link";

export default function Home() {

  return (

    <div>      

      <h1 className="text-center mt-2">Home Page</h1>
      
      <Button>
        <Link href="/admin">admin</Link>
      </Button>

    </div>

  );
}
