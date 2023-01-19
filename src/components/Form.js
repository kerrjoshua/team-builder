
function Form(props){
    const values = props.values;

    const handleChange = ((evt => {
        const { name, value } = evt.target;

        props.change(name, value);

    }))

    const handleSubmit = evt => { 
        evt.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name
            <input placeholder="Enter name"
            value={values.name}
            name='name'
            onChange={handleChange}
            />
            </label>
        
            <label>Position
            <input placeholder="Enter position"
            value={values.position}
            name='position'
            onChange={handleChange}
            />

            </label>
            <label>Skill
            <input placeholder="Enter skill"
            value={values.skill}
            name='skill'
            onChange={handleChange}
            />
            </label>
            {/*<label>Dribbling
            <input placeholder="Enter dribbling"
            value={values.skills.dribbling}
            name='dribbling'
            onChange={handleChange}
            />

            </label>
            <label>Passing
            <input placeholder="Enter passing"
            value={values.skills.passing}
            name='passing'
            onChange={handleChange}
            />
             </label>*/}

            <input type='submit' value='Create your team!' />

            

        </form>
    )

}

export default Form;