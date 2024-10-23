import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"



export default function adminLayout({ children }) {
    return (
        <div>
            <Tabs defaultValue="account" className="w-full">
                <TabsList className="w-full">
                    <Link href={`/admin/teachers`}>
                        <TabsTrigger value="teachers">Teacher</TabsTrigger>
                    </Link>

                    <Link href={`/admin/students`}>
                        <TabsTrigger value="students">Student</TabsTrigger>
                    </Link>

                    <Link href={`/admin/dashboard`}>
                        <TabsTrigger value="dashboard">dashboard</TabsTrigger>
                    </Link>

                    <Link href={`/admin/courses`}>
                        <TabsTrigger value="courses">courses</TabsTrigger>
                    </Link>

                    <Link href={`/admin/batches`}>
                        <TabsTrigger value="batches">batches</TabsTrigger>
                    </Link>

                </TabsList>
                <TabsContent value="teachers">{children}</TabsContent>
                <TabsContent value="students">{children}</TabsContent>
                <TabsContent value="dashboard">{children}</TabsContent>
                <TabsContent value="courses">{children}</TabsContent>
                <TabsContent value="batches">{children}</TabsContent>
            </Tabs>

        </div>
    )
}