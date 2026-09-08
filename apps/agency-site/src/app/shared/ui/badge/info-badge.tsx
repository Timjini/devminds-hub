import * as Icons from "lucide-react";
import { IconComponent } from "../../utils/icon-helper";

interface badgeData {
    text: string;
    icon?: keyof typeof Icons;
}

const InfoBadge = (data: badgeData) => {


    return (
        <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary">
            {data.icon && <IconComponent iconName={data.icon} />} {data.text}
        </div>
    )
}


export default InfoBadge;
