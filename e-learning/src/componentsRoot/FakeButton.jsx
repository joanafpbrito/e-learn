import '../componentsRoot/rootLayout.css';
function FakeButton ({children, onClick, isActive}) {
    
        return (
        <button className="sidebar-button" onClick={onClick}> {children} </button>
        );
    
}

export default FakeButton;