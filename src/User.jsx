function User(props) {
  console.log(props);
    return (
      
        <div>
            <h1>This is User Component</h1>
            <h2>{props.name}</h2>
            
        </div>
    );
}

export default User;