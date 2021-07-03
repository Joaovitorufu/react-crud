export const NavItem = ({icon, href, name}) => {
    return(

    <a href={href}>
         <i className={`fa fa-${icon}`}></i> {name}
    </a>
    )
}