import { BatchTable } from "@/components/ui/batchesTable"
import BatchModel from "@/components/modals/batchModel"


export default function Batches() {
    return (
        
        <div>
            <div className="flex justify-evenly items-center mb-4 ">
                <div >
                    <h1 className="text-center font-bold text-3xl" >Batches</h1>
                </div>
                <div>
                    {/* Yaha Mene Batch Ka modal dala han */}
                    <BatchModel />
                </div>
            </div>
            {/* Yaha mene batch ka table dala han */}
            <BatchTable />
        </div>

    )
}