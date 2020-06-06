import React from "react";
import { storiesOf } from "@storybook/react";
import ProductInfos from "./ProductInfos";

storiesOf("Organisms|ProductInfos").add("Default", () => (
  <div
    style={{
      backgroundColor: "#fff",
      height: "100vh",
      maxWidth: "980px",
      width: "100%",
      margin: "0 auto",
    }}
  >
    <ProductInfos
      product={{
        name: "Product name",
        shortDescription: "A short description...",
        code: "productcode",
        variants: [
          {
            price: {
              current: 1050,
              currency: "USD",
            },
            code: "variant0code",
          },
        ],
        localImage: {
          childImageSharp: {
            fluid: {
              base64:
                "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAwUC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAGUW1MuyWCZVR0LxcR//8QAHxAAAgICAQUAAAAAAAAAAAAAAQIDBAAREBITITIz/9oACAEBAAEFAp3KsZGBRu4lvWR/XLXl4xodBy57V2PH/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHBAAAgIDAQEAAAAAAAAAAAAAAAECERAhQVGR/9oACAEBAAY/AkKV7FKhPpHCJT8NX9IkVy8f/8QAHBAAAwEBAQADAAAAAAAAAAAAAAERIUExUWFx/9oACAEBAAE/IZ/K1a0LS+oJ6FHKxh8S6J4pDoDIviL9PukFjF1M9PoVn//aAAwDAQACAAMAAAAQKCbD/8QAGBEBAQADAAAAAAAAAAAAAAAAARARIUH/2gAIAQMBAT8QDkHeZ//EABkRAAMAAwAAAAAAAAAAAAAAAAABERAhQf/aAAgBAgEBPxC9w1oiP//EACAQAQACAgIBBQAAAAAAAAAAAAEAESExQVFhcYGRofH/2gAIAQEAAT8QJjcqxrFHzDiAEcJ1WoW+8JpMPtLEuA9H8l0KbETw5gZiK4SKjlQ8y/JH8qo+omCkg3jAxxtN7yQgTsWd7h3T/9k=",
              src: "https://i.picsum.photos/id/469/300/300.jpg",
              aspectRatio: 0.7490636704119851,
              srcSet:
                "https://i.picsum.photos/id/469/300/300.jpg 200w,\nhttps://i.picsum.photos/id/469/300/300.jpgg 400w,\nhttps://i.picsum.photos/id/469/300/300.jpg 800w,\nhttps://i.picsum.photos/id/469/300/300.jpg 1200w",
              sizes: "(max-width: 800px) 100vw, 800px",
            },
          },
        },
      }}
    />
  </div>
));
