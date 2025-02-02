import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/engagements/engagements.module.css";
import Link from "next/link";
import Image from "next/image";

const EngagementsPages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product" />
        <Link href="/dashboard/engagements/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Company name</td>
            <td>Desc</td>
            <td>Industry</td>
            <td>Latest assessment</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>
            <div className={styles.engagements}>
              <Image
                src="/aws.png"
                alt=""
                width={40}
                height={40}
                className={styles.engagementsImage}
              />
              AWS
            </div>
          </td>
          <td>Amazon Web Services</td>
          <td>Cloud</td>
          <td>19.11.1911</td>
          <td>Active</td>
          <td>
            <div className={styles.buttons}>
              <Link href="/dashboard">
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>
                Delete
              </button>
            </div>
          </td>
          </tr>
          <tr>
          <td>
            <div className={styles.engagements}>
              <Image
                src="/apple-logo.png"
                alt=""
                width={40}
                height={40}
                className={styles.engagementsImage}
              />
              Apple
            </div>
          </td>
          <td>Apple Inc</td>
          <td>Food</td>
          <td>19.11.1911</td>
          <td>Inactive</td>
          <td>
            <div className={styles.buttons}>
              <Link href="/dashboard">
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>
                Delete
              </button>
            </div>
          </td>
          </tr>
          <tr>
          <td>
            <div className={styles.engagements}>
              <Image
                src="/google.png"
                alt=""
                width={40}
                height={40}
                className={styles.engagementsImage}
              />
              Google
            </div>
          </td>
          <td>Google</td>
          <td>Tech</td>
          <td>19.11.1911</td>
          <td>Active</td>
          <td>
            <div className={styles.buttons}>
              <Link href="/dashboard">
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>
                Delete
              </button>
            </div>
          </td>
          </tr>
          <tr>
          <td>
            <div className={styles.engagements}>
              <Image
                src="/microsoft.png"
                alt=""
                width={40}
                height={40}
                // className={styles.engagementsImage}
              />
              Microsoft
            </div>
          </td>
          <td>Microsoft</td>
          <td>Tech</td>
          <td>19.11.2011</td>
          <td>Active</td>
          <td>
            <div className={styles.buttons}>
              <Link href="/dashboard">
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>
                Delete
              </button>
            </div>
          </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EngagementsPages;
