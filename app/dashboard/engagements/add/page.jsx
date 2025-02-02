import styles from "@/app/ui/dashboard/engagements/addEngagements.module.css"

const AddEngagementPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="Tech">Tech</option>
          <option value="Food">Food</option>
          <option value="Cloud">Cloud</option>
        </select>
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEngagementPage;
