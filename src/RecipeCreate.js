import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  // const [name, setName] = useState("");
  // const [cuisine, setCuisine] = useState("");
  // const [photo, setPhoto] = useState("");
  // const [rating, setRating] = useState("");
  // const [ingredients, setIngredients] = useState("");
  // const [preparation, setPreparation] = useState("");
  
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients:"",
    preparation: ""
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({...initialFormState});
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>     
          <tr>
            <td>
              <label htmlFor="name">
              <input 
              id="name"
              type="text"
              name="name" 
              onChange={handleChange}
              value={formData.name}
              placeholder="Name"
              />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
              <input 
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
              />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input 
                  id="photo"
                  type="text"
                  name="photo"
                  onChange={handleChange}
                  value={formData.photo}
                  placeholder="URL"
                />
              </label>
            </td>
            <td>
                <textarea
                  id="ingredients"
                  name="ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                  placeholder="Ingredients"                  
                />
            </td>
            <td>
                <textarea 
                  id="preparation"
                  name="preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                  placeholder="Preparation"
                />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
