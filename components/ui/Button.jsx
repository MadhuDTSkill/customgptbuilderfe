'use client'

import { useRouter } from "next/navigation";

const Button = ({ children = 'Button', className = '', extraClassName = '', color = 'black', backgroundColor = 'white', href, ...props }) => {
    
    const router = useRouter();
    const handleRouterClick = () => {
        if (href) {
        router.push(href);
        }
    };
    
    return (
        <button
            style={{color, backgroundColor }}
            className={
                className 
                ? className 
                : 'm-1 p-2 px-5 rounded-lg font-semibold hover:bg-black hover:text-white hover:border-2 duration-200' + 
                ' ' + extraClassName || ''
            }
            onClick={handleRouterClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
