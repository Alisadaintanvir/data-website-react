import LeadsSeachFilter from "./LeadsSearchFilter";
import LeadTable from "./LeadTable";


export default function LeadsSearch(){
    return(
        <div className="flex">
            <LeadsSeachFilter />
            <LeadTable/>
        </div>
    );
}