const Card = (props) => {
return <div className="container mt-5 bg-dark w-75 rounded">
    {props.children}
</div>
}

export default Card;