import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user" />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Date started</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <td>
            <div className={styles.user}>
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={styles.userImage}
              />
              John Doe
            </div>
          </td>
          <td>3123@e12312.net</td>
          <td>19.11.1911</td>
          <td>Admin</td>
          <td>active</td>
          <td>
            <div className={styles.buttons}>
              <Link href="/">
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>
                Delete
              </button>
            </div>
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
