import LeadSearchFilter from "./LeadSearchFilter";
import LeadTable from "./LeadTable";


export default function LeadsSearch(){
    return(
        <div className="flex">
            <LeadSearchFilter />
            <LeadTable/>
        </div>
    );
}