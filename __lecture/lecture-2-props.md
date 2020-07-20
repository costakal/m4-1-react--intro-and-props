# 4.1.2 Props

- The same component can work with **different data**
- Similar to attributes on HTML elements (consider `<img>`)

---

### Designing props

Here's part of the Spotify desktop app:

<img src="./assets/spotify-artists.png" />

---

Our "output" HTML might look like this:

```html
<div>
  <img src="skrillex.jpg" />
  <h3>Skrillex</h3>
  <p>9 SONGS</p>
</div>
```

What are the pieces of dynamic data?

---

Our component might look like this:

```jsx
function RecommendedArtist(props) {
  return (
    <div>
      <img src={props.imageUrl} />
      <h3>{props.artistName}</h3>
      <p>{props.numOfSongs} SONGS</p>
    </div>
  );
}
```

---

We can use it like this:

```jsx
<RecommendedArtist
  imageUrl="skrillex.jpg"
  artistName="Skrillex"
  numOfSongs={9}
/>
<RecommendedArtist
  imageUrl="helmet-thing.jpg"
  artistName="Disciple Round Table"
  numOfSongs={1}
/>
<RecommendedArtist
  imageUrl="geoxor.jpg"
  artistName="Geoxor"
  numOfSongs={1}
/>

```

---

### Deconstructed props

A common paradigm:

```jsx
const UserProfile = ({ username, email, bio }) => {
  return (
    <div>
      Username: {username}
      Email: {email}
      Biography: {bio}
    </div>
  );
};
```

---

# Exercise

Make the components reusable by using props.

```jsx
function VideoPlayer( {videoSrc, videoWidth, videoHeight, videoCaption}) {
  return (
    <div>
      <video src={videoSrc} width={videoWidth} height={videoHeight} />
      <p>{videoCaption</p>
    </div>
  );
}
```

---

```jsx
function Tweet({ imgUrl, userId, userHandle, postDate, userPost }) {
  return (
    <div>
      <Avatar src={imgUrl} />
      <div>
        <p>
          <span className="user-name">{userId}</span>
          <span className="handle">{userHandle}</span>
          <span className="date">{postDate}</span>
        </p>
        <p>{userPost}</p>
        <div>
          <button>Reply</button>
          <button>Retweet</button>
          <button>Like</button>
          <button>Share</button>
        </div>
      </div>
    </div>
  );
}
```

---

```jsx
function Header({ title, navLinks }) {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <a href={navLinks.about.url}>{navLinks.about.label}</a>
        <a href={navLinks.contact.url}>{navLinks.contact.label</a>
      </nav>
    </header>
  );
}
```

---

### Mapping over items

Say we have some data:

```js
const storeItems = [
  { id: "a", price: 19.99, name: "Monocle" },
  { id: "b", price: 209.99, name: "Cane" },
  { id: "c", price: 44.99, name: "Top Hat" },
];
```

---

We want to turn it into this HTML:

```html
<ul>
  <li class="item">
    <h3>Monocle</h3>
    <p>Price: $19.99</p>
    <button>Add to cart</button>
  </li>

  <li class="item">
    <h3>Cane</h3>
    <p>Price: $209.99</p>
    <button>Add to cart</button>
  </li>

  <li class="item">
    <h3>Top Hat</h3>
    <p>Price: $44.99</p>
    <button>Add to cart</button>
  </li>
</ul>
```

---

First, create a component:

```jsx
function StoreItem(props) {
  return (
    <li className="item">
      <h3>{props.name}</h3>
      <p>Price: ${props.price}</p>
      <button>Add to cart</button>
    </li>
  );
}
```

---

Next, **map over our data**, using the component once per item:

```jsx
const storeItems = [
  { id: "a", price: 19.99, name: "Monocle" },
  { id: "b", price: 209.99, name: "Cane" },
  { id: "c", price: 44.99, name: "Top Hat" },
];

function App(props) {
  return (
    <li>
      {storeItems.map((item) => (
        <StoreItem name={item.name} price={item.price} />
      ))}
    </li>
  );
}
```

---

# Exercises

Use `map` in the following snippets.

---

```jsx


const pets = [
  /* omitted */
];

//ORIGINAL
<div>
  <h1 className="title">My pets:</h1>
  <ul>
    <PetInfo
      name={pets[0].name}
      age={pets[0].age}
      species={pets[0].species}
      breed={pets[0].breed}
    />
    <PetInfo
      name={pets[1].name}
      age={pets[1].age}
      species={pets[1].species}
      breed={pets[1].breed}
    />
  </ul>
</div>;

// SHROTENED WITH MAP
<div>
  <ul>
    pets.map((pet) => {
      <PetInfo
        name={pet.name}
        age={pet.age}
        species={pet.species}
        breed={pet.breed}
      />;
    });
  </ul>
</div>


```

---

```jsx
const forecasts = [4, -3, 1, 9, 4, 2, -6];

<div>
  <h1>Weather forecast for the week ahead:</h1>

  <Day>4 degrees</Day>
  <Day>-3 degrees</Day>
  <Day>1 degrees</Day>
  <Day>9 degrees</Day>
  <Day>4 degrees</Day>
  <Day>2 degrees</Day>
  <Day>-6 degrees</Day>
</div>;

// shortened with map
<div>
  <h1>Weather forecast for the week ahead:</h1>
  {forecasts.map((temp) => (
    <Day>{temp} degrees</Day>
  ))}
</div>;
```

---

```jsx
const pizzaToppings = [
  { name: 'pepperoni', isVegetarian: false },
  { name: 'green pepper', isVegetarian: true },
  { name: 'broccoli', isVegetarian: true },
  { name: 'sausage', isVegetarian: false },
]

<Pizza>
  {pizzaToppings
    .filter(topping => topping.isVegetarian)
    .map(topping => <Topping name={topping.name} />)
  }
</Pizza>

```

Hint: You'll need `filter` as well as `map`
