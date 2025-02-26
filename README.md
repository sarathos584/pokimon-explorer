# Pokemon Explorer

### Overview

Pokemon Explorer is a responsive and visually appealing web app built using Next.js. It fetches data from the PokeAPI and allows users to explore Pokémon with a search feature and detailed Pokémon pages.

### Features

#### Homepage

- Displays a list of Pokémon fetched from the PokeAPI.

- Implements a search bar to filter Pokémon by name.

- Styled using TailwindCSS for a modern and responsive UI.

#### Detail Page

- Clicking on a Pokémon navigates to a new page displaying detailed information.

- Shows image, abilities, type, stats, and moves of the selected Pokémon.


#### Performance Optimization (Optional Implementations)

- Uses Static Site Generation (SSG) for optimized performance.

- Implements Server-Side Rendering (SSR) where necessary for dynamic data.

#### Tech Stack

- Next.js 

- TypeScript

- TailwindCSS (For responsive and clean styling)


### Installation & Setup

#### Prerequisites

- Ensure you have Node.js and npm/yarn installed on your system.

- Steps to Run the Project

- Clone the Repository:
    ```bash
    git clone https://github.com/sarathos584/pokimon-explorer.git
    ```
    ```bash
    cd pokemon-explorer
    ```



- Install Dependencies:
    ```bash
    npm install  # or yarn install
    ```
    ```bash
    npm run dev  # or yarn dev
    ```

- Run the Development Server:

    Open in Browser:
    Visit http://localhost:3000 to explore Pokémon.

#### Folder Structure

```bash
├─public # Store static assets
├─src
├── apps  
│   ├── layout.tsx        # Layout page
│   ├── page.tsx        # Homepage listing Pokémon
│   ├── [id]
│   │   ├── page.tsx     # Dynamic Pokémon detail page
├── components           # Reusable UI components
├── helpers              # Reusable util functions
├── types               # Custom types
```

#### API Reference

PokeAPI: https://pokeapi.co/


