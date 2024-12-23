### **Hotel Application**


A simple hotel application built with React, TypeScript, and Vite. The application displays a list of hotels and allows users to view details for each hotel. It is developed using JSON data, but an attempt has been made to use MSW (Mock Service Worker) for simulating API calls.

### Features
- **Hotel List Screen**: Displays a list of available hotels with their name, location, rating, image, dates of travel, and room details.
- **Hotel Detail Screen**: Displays detailed information about a selected hotel.
- **Routing**: Implemented using React Router for navigating between the list and detail screens.
- **Mock API**: The project uses JSON data for hotel information but includes an attempt to use MSW (Mock Service Worker) to simulate API responses.
- **Styling**: Basic layout using Bootstrap for quick and responsive styling.

### Technologies Used
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript for better developer tooling.
- **Vite**: A build tool that provides fast development server and optimized production builds.
- **React Router**: For navigation between pages.
- **MSW (Mock Service Worker)**: For simulating API responses without a real backend (not fully functional, JSON data used for now).
- **Bootstrap**: For responsive design and styling.
  
### Getting Started
To run the application locally, follow the instructions below:

### Prerequisites
Make sure you have the following installed:

Node.js (version 14 or higher)
npm (comes with Node.js) 
1. Clone the Repository
First, clone this repository to your local machine:

--git clone [https://github.com/VaishnaviManjunatha/Hotel-SPA.git]

2. Install Dependencies
Navigate into the project folder and install the dependencies:

-- cd hotel-booking-app
-- npm install

3. Run the Development Server

Once the dependencies are installed, you can run the development server:
--npm run dev

This will start the Vite development server and open the application in your default browser (usually at http://localhost:5173).

4. Open the Application
Open your browser and navigate to the following URL:

http://localhost:5173
You should see the hotel list screen with the ability to click on a hotel to view its details.

5. Mock API (MSW)
The project uses JSON data to simulate the API responses, but there is an attempt to use MSW (Mock Service Worker) for mocking the API calls. MSW intercepts requests and serves the mock data, which you can find in the src/services/msw/browser.ts file. Only the listing page is functional with mock APIs but trying to implement the rest as well.

Ensure that the MSW mock API is properly set up to simulate API calls. If you encounter issues with MSW, the data is available in the src/data/HotelData.json file.



### File Details:
- **HotelList.tsx**: Displays the list of hotels.
- **HotelDetail.tsx**: Displays detailed information for a selected hotel.
- **HotelData.json**: Contains Json/mock data for hotels.
- **msw/browser.ts**: MSW service worker setup to mock API calls.
- **App.tsx**: The main component that renders the app and routes.

