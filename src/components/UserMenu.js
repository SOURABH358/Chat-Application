export default function UserMenu(){
    function handleLogOut(){
        
    }
    return (
        <div className="user__menu">
            <p>Update Profile</p>
            <p onClick={()=>handleLogOut()}>Log Out</p>
            <p>Delete User</p>
        </div>
    )
}