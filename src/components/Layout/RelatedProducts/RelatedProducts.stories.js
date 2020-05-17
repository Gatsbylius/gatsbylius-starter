import React from "react";
import { storiesOf } from "@storybook/react";
import RelatedProducts from "./RelatedProducts";

const category = {
  products: [
    {
      name: "Product name",
      slug: "product-1",
      localImage: {
        childImageSharp: {
          fluid: {
            base64:
              "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAwUC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAGUW1MuyWCZVR0LxcR//8QAHxAAAgICAQUAAAAAAAAAAAAAAQIDBAAREBITITIz/9oACAEBAAEFAp3KsZGBRu4lvWR/XLXl4xodBy57V2PH/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHBAAAgIDAQEAAAAAAAAAAAAAAAECERAhQVGR/9oACAEBAAY/AkKV7FKhPpHCJT8NX9IkVy8f/8QAHBAAAwEBAQADAAAAAAAAAAAAAAERIUExUWFx/9oACAEBAAE/IZ/K1a0LS+oJ6FHKxh8S6J4pDoDIviL9PukFjF1M9PoVn//aAAwDAQACAAMAAAAQKCbD/8QAGBEBAQADAAAAAAAAAAAAAAAAARARIUH/2gAIAQMBAT8QDkHeZ//EABkRAAMAAwAAAAAAAAAAAAAAAAABERAhQf/aAAgBAgEBPxC9w1oiP//EACAQAQACAgIBBQAAAAAAAAAAAAEAESExQVFhcYGRofH/2gAIAQEAAT8QJjcqxrFHzDiAEcJ1WoW+8JpMPtLEuA9H8l0KbETw5gZiK4SKjlQ8y/JH8qo+omCkg3jAxxtN7yQgTsWd7h3T/9k=",
            src: "https://i.picsum.photos/id/469/200/300.jpg",
            aspectRatio: 0.7490636704119851,
            srcSet:
              "https://i.picsum.photos/id/469/200/300.jpg 200w,\nhttps://i.picsum.photos/id/469/200/300.jpgg 400w,\nhttps://i.picsum.photos/id/469/200/300.jpg 800w,\nhttps://i.picsum.photos/id/469/200/300.jpg 1200w",
            sizes: "(max-width: 800px) 100vw, 800px"
          }
        }
      }
    },
    {
      name: "Product name 2",
      slug: "product-3",
      localImage: {
        childImageSharp: {
          fluid: {
            base64:
              "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQD/2gAMAwEAAhADEAAAAW3ozSYwW02RCpIi/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIAAxIQESAhQf/aAAgBAQABBQJExArzgqURul80Uzfh/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/ASv/xAAWEQADAAAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8BI//EAB0QAAEEAgMAAAAAAAAAAAAAAAEAAiBBERIhYYH/2gAIAQEABj8CJtbEclYLXeIw6qP/xAAdEAEAAgICAwAAAAAAAAAAAAABACERMRBBUYGR/9oACAEBAAE/IX0cjXIaKgeSjBQmoAk6xPb9jhLjlJSl5mbx28f/2gAMAwEAAgADAAAAEBfTjP/EABgRAAMBAQAAAAAAAAAAAAAAAAABERAh/9oACAEDAQE/EG+3EpT/xAAYEQACAwAAAAAAAAAAAAAAAAAAEQEQMf/aAAgBAgEBPxCMoxH/xAAfEAEBAAIBBAMAAAAAAAAAAAABEQAhMRBBcZFRYaH/2gAIAQEAAT8QTPAyxJfrHtqvkc+ctiDpVP3AnFhO5kndw9Y00GfFYkkRI4KJFUtNcUVPeJkOAryzfvp//9k=",
            src: "https://i.picsum.photos/id/769/200/300.jpg",
            aspectRatio: 0.7490636704119851,
            srcSet:
              "https://i.picsum.photos/id/769/200/300.jpg 200w,\nhttps://i.picsum.photos/id/769/200/300.jpg 400w,\nhttps://i.picsum.photos/id/769/200/300.jpg 800w,\nhttps://i.picsum.photos/id/769/200/300.jpg 1200w",
            sizes: "(max-width: 800px) 100vw, 800px"
          }
        }
      }
    }
  ]
};

storiesOf("Components|Layout/RelatedProducts").add("Default", () => (
  <RelatedProducts
    data={{
      product: { name: "A product name" },
      category
    }}
  />
));
