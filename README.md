# Sales Dashboard - Next.js 15 Project

A modern, interactive sales dashboard built with Next.js 15, TypeScript, and Tailwind CSS, following atomic design principles.

## 🚀 Features

- **Interactive Charts**: Multiple chart types (Bar, Line, Area) using Recharts
- **Year Filtering**: View sales data for 2022, 2023, and 2024
- **Custom Threshold Filter**: Filter data based on minimum sales values
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Atomic Design**: Modular component architecture (Atoms → Molecules → Organisms → Templates)
- **TypeScript**: Full type safety throughout the application
- **Real-time Metrics**: Display total sales, revenue, and growth rates

## 📊 Project Structure

The project follows atomic design principles:

- **Atoms**: Basic building blocks (Button, Input, Select)
- **Molecules**: Simple component combinations (FilterControl, ChartHeader)
- **Organisms**: Complex components (SalesChart, SalesMetrics)
- **Templates**: Page layouts (DashboardLayout)
- **Pages**: Complete pages using all components

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```
git clone <your-repo-url>
cd sales-dashboard
```

2. Install dependencies:
```
npm install
```

3. Run the development server:
```
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Usage

1. **Home Page**: Landing page with a link to the dashboard
2. **Dashboard**: Main analytics page with:
   - Sales metrics cards
   - Year and threshold filters
   - Chart type switcher (Bar/Line/Area)
   - Monthly sales visualization
   - Yearly comparison chart

### Filters

- **Year Selector**: Choose between 2022, 2023, or 2024
- **Sales Threshold**: Enter a minimum sales value to filter data
- **Chart Type**: Switch between Bar, Line, and Area charts

## 📈 Data Source

The project uses mock sales data representing typical e-commerce patterns:
- Monthly data for 2022, 2023, and 2024
- Sales and revenue metrics
- Realistic seasonal variations and growth trends

## 🔄 Future Enhancements

- [ ] API Integration for real-time data
- [ ] Export data to CSV/Excel
- [ ] User authentication
- [ ] Multiple dashboard views
- [ ] Advanced analytics (forecasting, predictions)
- [ ] Dark mode support

## 🏗️ Build for Production

```
npm run build
npm start
```

## 📝 What I Built

### Components Created

1. **Atoms** (3 components)
   - Button: Reusable button with variants
   - Input: Styled input field with label
   - Select: Dropdown selector

2. **Molecules** (2 components)
   - FilterControl: Year and threshold filters
   - ChartHeader: Header with icon and title

3. **Organisms** (3 components)
   - SalesChart: Multi-type chart component
   - YearlySalesChart: Yearly comparison chart
   - SalesMetrics: Metric cards display

4. **Templates** (1 component)
   - DashboardLayout: Page wrapper with header/footer

5. **Pages** (2 pages)
   - Home: Landing page
   - Dashboard: Main analytics page

### Features Implemented

- ✅ Atomic design structure
- ✅ Multiple chart types
- ✅ Year filtering
- ✅ Custom threshold filtering
- ✅ Responsive design
- ✅ TypeScript throughout
- ✅ Mock sales data (3 years)
- ✅ Growth rate calculations
- ✅ Professional UI/UX

## 📄 License

MIT

## 👤 Author

Your Name - S. Tarun Kumar
