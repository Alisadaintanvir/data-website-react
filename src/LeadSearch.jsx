import LeadSearchFilter from "./LeadSearchFilter";
import LeadRightSec from "./LeadRightSec";


export default function LeadsSearch(){
    return(
        <div className="flex h-[100vh] bg-gray-50 overflow-y-hidden">
            <LeadSearchFilter />
            <LeadRightSec/>
        </div>
    );
}