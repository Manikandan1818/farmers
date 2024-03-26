import { IoCloudUploadOutline } from "react-icons/io5";
import { ImagetoBase64 } from "../utilities/ImagetoBase64";
import { useState } from "react";

const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    setData((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
  };

  const hanleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <section className="p-4 mt-2 md:mt-4">
      <form
        className="flex flex-col m-auto max-w-md w-full p-3 bg-secondaryColor"
        onSubmit={hanleSubmit}
      >
        <label htmlFor="name" className="my-2">
          Product Name
        </label>
        <input
          type="text"
          name="name"
          className="bg-primaryColor rounded my-1 p-1"
          onChange={handleChange}
        />
        <label htmlFor="category" className="my-1">
          Product Category
        </label>
        <select
          className="bg-primaryColor rounded my-1"
          id="category"
          name="category"
          onChange={handleChange}
        >
          <option>Fruits</option>
          <option>Vegetables</option>
          <option>Groceries</option>
          <option>Pizza</option>
        </select>
        <label htmlFor="image" className="my-2">
          Product Image
          <div className=" h-40 w-full bg-primaryColor my-2 rounded flex items-center justify-center cursor-pointer">
            {data.image ? (
              <img src={data.image} className="h-full p-1" />
            ) : (
              <span className="text-4xl">
                <IoCloudUploadOutline />
              </span>
            )}
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              className="hidden"
              onChange={uploadImage}
            />
          </div>
        </label>
        <label htmlFor="price" className="my-1">
          Product Price
        </label>
        <input
          type="text"
          name="price"
          className="bg-primaryColor rounded my-1 p-1"
          onChange={handleChange}
        />
        <label htmlFor="description" className="my-1">
          Product Description
        </label>
        <textarea
          name="description"
          rows={3}
          className="bg-primaryColor rounded my-1 p-1 resize-none"
          onChange={handleChange}
        ></textarea>
        <button className="w-full m-auto bg-iconColor hover:bg-greycolor text-white text-xl font-medium  uppercase font-oswald py-2 rounded-full mt-2 cursor-pointer">
          Save
        </button>
      </form>
    </section>
  );
};

export default NewProduct;
