import TeacherModel from "@/components/modals/teacherModel"
import { TeacherTable } from "@/components/ui/teacherTable"
export default function Teachers() {
    return (

        <div>
            <div className="flex  justify-evenly items-center mb-4">
                <div>
                    <h1 className="text-center font-bold text-3xl " >Teachers</h1>
                </div>
                <div>
                    {/* Ye Teacher Ka modal Han */}
                    <TeacherModel />
                </div>
            </div>
            {/*  Ye Teacher Table Han */}
            <TeacherTable />
        </div>

    )
}