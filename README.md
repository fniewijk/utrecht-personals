# Utrecht Personals

A modern personal connection platform for Utrecht, Netherlands, inspired by SF Personals but tailored for the beautiful city of Utrecht.

## 🚀 Features

- **Browse Profiles**: Discover amazing people in Utrecht
- **Responsive Design**: Optimized for desktop and mobile
- **Modern Tech Stack**: React 18, TypeScript, React Router v6
- **Docker Ready**: Easy deployment to DigitalOcean and other platforms
- **Dutch Localization**: Tailored for the Utrecht community

## 🛠 Tech Stack

- React 18.2.0
- TypeScript 4.9.5
- React Router DOM 6.23.1
- Axios for API calls
- CSS3 for styling
- Docker for containerization

```
utrecht-personals
├── src
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PersonalCard.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── Browse.tsx
│   │   └── Profile.tsx
│   ├── styles
│   │   └── main.css
│   ├── utils
│   │   └── api.ts
│   └── App.tsx
├── public
│   └── index.html
├── package.json
├── tsconfig.json
├── dockerfile
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/utrecht-personals.git
   cd utrecht-personals
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Build for production:**
   ```
   npm run build
   ```

## Deployment

To deploy the application, you can use platforms like DigitalOcean. Ensure you have Docker installed and follow these steps:

1. Build the Docker image:
   ```
   docker build -t utrecht-personals .
   ```

2. Run the Docker container:
   ```
   docker run -p 80:80 utrecht-personals
   ```

## Usage

Once the application is running, navigate to `http://localhost` in your web browser to access the Utrecht Personals application. You can browse through personals, view profiles, and interact with the features provided.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.