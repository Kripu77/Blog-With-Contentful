
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import RenderImage from "../components/RenderImage";
import { bodyImage } from "../images/blurData.js";
import styles from "../styles/Home.module.css";

//setup for rich text UI rendering
export const renderOptions = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
     

      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "blogPost") {
        return (
          <Link
            href={`/blog/${node.data.target.fields.slug}`}
            alt={node.data.target.fields.title}
          >
            {" "}
            {node.data.target.fields.title}
          </Link>
        );
      }
    },
    [MARKS.CODE]: (node, children) => {
    

      // target the contentType of the EMBEDDED_ENTRY to display
      if (node.data.target.sys.contentType.sys.id === "code") {
        return (
          <div className={styles.codeBlock}>
            <pre>
              <code>{node.data.target.fields.code}</code>
            </pre>
          </div>
        );
      }

      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
 

      // render the EMBEDDED_ASSET
      return (
        <RenderImage
          src={`https:${node.data.target.fields.file.url}`}
          alt={node.data.target.fields.description}
          placeholder="blur"
          blurDataURL={bodyImage}
          width={758}
          height={388}
          className={styles.demoimage}
        />
      );
    },
  },
};
