

export const Form = ({text, setText, handleSubmit }) => {

return (
    <form className="form" onSubmit={handleSubmit} >
        <input value={text} onChange={(e)=>setText(e.target.value)} type="text"/>
        <button type="submit">Add new task</button>
    </form>
);}