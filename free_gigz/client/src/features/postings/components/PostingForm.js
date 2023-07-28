import React, { useState } from "react";
import { useSystemMode } from "../../../SystemModeContext";
import voca from "voca";
import Error from "../../../components/Error";

export default function PostingForm({ posting, onSubmit, onCancel, errors }) {
  const systemMode = useSystemMode();

  const [currentPosting, setCurrentPosting] = useState(() => {
    if (posting) {
      return {
        id: posting.id,
        title: posting.title,
        description: posting.description,
        price: parseInt(posting.price),
        price_unit: posting.price_unit.replace(" ", "_").toLowerCase(),
      };
    } else {
      return {
        title: "",
        description: "",
        categories: "Accounting",
        price: "0",
        price_unit: "Hourly",
      };
    }
  });

  const [categories, setCategories] = useState(() => {
    if (posting) {
      return [...posting.categories];
    }
    return [];
  });

  function handleChange(e) {
    const name = e.target.name.replace("-", "_");
    let value = e.target.value;

    if (name === "price-unit") {
      value = value.replace(" ", "_").toLowerCase();
    }

    setCurrentPosting({
      ...currentPosting,
      [name]: value,
    });
  }

  function handleCategoryUpdate(e) {
    const category = voca.titleCase(e.target.value.replace("-", " "));
    const index = categories.indexOf(category);
    if (index > -1) {
      setCategories(
        categories
          .filter((selectedCategory) => selectedCategory !== category)
          .sort()
      );
    } else {
      setCategories([...categories, category].sort());
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
      ...currentPosting,
      price: parseInt(currentPosting.price),
      price_unit: voca.titleCase(currentPosting.price_unit),
      categories: [...categories],
    });
  }

  return (
    <div className="posting-form__div">
      <form
        className="posting-form__form mt-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floating-posting-form-title"
            name="title"
            placeholder="Enter your title here"
            value={currentPosting.title}
            onChange={(e) => handleChange(e)}
          />
          <label
            class={`text-colors-${systemMode.toLowerCase()}`}
            for="floating-posting-form-title"
          >
            {systemMode === "Freelancer"
              ? "What Are You Offering?"
              : "Where Do You Need Assistance?"}
          </label>
        </div>
        <div class="form-floating mb-3">
          <textarea
            id="floating-posting-form-description"
            name="description"
            class="form-control"
            rows="3"
            style={{ height: "100%", resize: "none" }}
            value={currentPosting.description}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your description here"
          />
          <label
            class={`text-colors-${systemMode.toLowerCase()}`}
            for="floating-posting-form-description"
          >
            {systemMode === "Freelancer"
              ? "Describe Your Offering"
              : "Describe Your Need"}
          </label>
        </div>
        <div class="mb-3">
          <div class="form-floating input-group mb-2">
            <select
              id="floating-posting-form-categories"
              name="categories"
              class="form-select"
              aria-describedby="btn-clear-categories"
              value={currentPosting.categories}
              onChange={(e) => handleCategoryUpdate(e)}
            >
              <option class="text-muted" value="">
                --Choose a Category--
              </option>
              <option value="accounting">Accounting</option>
              <option value="administrative">Administrative</option>
              <option value="bookkeeping">Bookkeeping</option>
              <option value="data-entry">Data Entry</option>
              <option value="education">Education</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="information-technology">
                Information Technology
              </option>
              <option value="legal">Legal</option>
              <option value="marketing">Marketing</option>
              <option value="other">Other</option>
              <option value="project-management">Project Management</option>
              <option value="recruiting">Recruiting</option>
              <option value="sales">Sales</option>
              <option value="software-development">Software Development</option>
              <option value="therapy">Therapy</option>
              <option value="web-development">Web Development</option>
              <option value="writing">Writing</option>
            </select>
            <label
              class={`text-colors-${systemMode.toLowerCase()}`}
              for="floating-posting-form-categories"
            >
              Select One or More Categories
            </label>
            <button
              id="btn-clear-categories"
              class="btn btn-danger"
              onClick={(e) => {
                e.preventDefault();
                setCategories([]);
              }}
            >
              X
            </button>
          </div>
          <p class="fst-italic text-muted">
            Current Categories: {categories.join(" • ")}
          </p>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">$</span>
          <div class="form-floating">
            <input
              type="number"
              class="form-control"
              id="floating-posting-form-price"
              name="price"
              value={currentPosting.price}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your price here"
            />
            <label
              class={`text-colors-${systemMode.toLowerCase()}`}
              for="floating-posting-form-price"
            >
              Price
            </label>
          </div>
        </div>
        <div class="form-floating mb-3">
          <select
            id="floating-posting-form-price-unit"
            name="price-unit"
            class="form-select"
            value={currentPosting.price_unit}
            onChange={(e) => handleChange(e)}
          >
            <option value="flat_amount">Flat Amount</option>
            <option value="hourly">Hourly</option>
            <option value="daily">Daily</option>
          </select>
          <label for="floating-posting-form-price-unit" class={`text-colors-${systemMode.toLowerCase()}`}>Price Category</label>
        </div>
        <div class="text-center">
          <div class="btn-group card-footer text-muted">
            <form class="container-fluid justify-content-start">
              <button onClick={(e) => handleSubmit(e)} class="btn btn-primary me-3" type="button">
                Submit
              </button>
              <button class="btn btn-danger" type="button" onClick={onCancel}>
                Cancel
              </button>
            </form>
          </div>
        </div>
        {errors.map((error) => {
          return <Error key={error} error={error} />;
        })}
      </form>
    </div>
  );
}
