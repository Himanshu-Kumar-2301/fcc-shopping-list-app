import React, { useState, useMemo, useCallback } from "react";

const items = [
  "Apples",
  "Bananas",
  "Strawberries",
  "Blueberries",
  "Mangoes",
  "Pineapple",
  "Lettuce",
  "Broccoli",
  "Paper Towels",
  "Dish Soap",
];

export const ShoppingList: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  const toggleItem = useCallback(
    (item: string) => {
      setSelectedItems((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
      );
    },
    [setSelectedItems],
  );

  return (
    <div className="container">
      <h1>Shopping List</h1>
      <form>
        <label htmlFor="search">Search for an item:</label>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          aria-describedby="search-description"
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
        <p id="search-description">Type to filter the list below:</p>
        <ul>
          {filteredItems.map((item) => {
            const isChecked = selectedItems.includes(item);
            return (
              <li
                key={item}
                style={{ textDecoration: isChecked ? "line-through" : "none" }}
              >
                <label>
                  <input
                    type="checkbox"
                    onChange={() => toggleItem(item)}
                    checked={isChecked}
                  />
                  {item}
                </label>
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
};
