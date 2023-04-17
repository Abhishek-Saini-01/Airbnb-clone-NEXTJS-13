'use client'

interface MenuItemProps {
    onClick : ()=>{};
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
    return (
        <div 
        className="px-4 py-3 bg-neutral-100 transition font-semibold "
        onClick={onClick}
        >
            {label}
        </div>
    )
}

export default MenuItem