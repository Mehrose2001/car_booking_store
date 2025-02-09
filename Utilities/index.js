const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7fa18a11damshf63e98804a2478ep193b17jsn879c7d351575',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
} catch (error) {
	console.error(error);
}

// export async function fetchCars() {

// 	const { manufacturrer, year, model, limit, fuel} = filters;

//   const headers = {
//     'X-RapidAPI-Key': '7fa18a11damshf63e98804a2478ep193b17jsn879c7d351575',
// 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
//   };
//   const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturrer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}",{
// 	headers
// });
// const result = await response.json();
// return result;
// }
// export function calculateCarRent(city_mpg, year) {
// 	const basePricePerDay = 50; // Base rental price per day in dollars
// 	const mileageFactor = 0.1; // Additional rate per mile driven
// 	const ageFactor = 0.05; // Additional rate per year of vehicle age
  
// 	// Calculate additional rate based on mileage and age
// 	const mileageRate = city_mpg * mileageFactor;
// 	const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
// 	// Calculate total rental rate per day
// 	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
// 	return rentalRatePerDay.toFixed(0);
//   };

// const generateCarImageUrl = ({car, angle})=>{
// 	const url = new URL("https://cdn.imagin.studio/getimage");
//   	const { make, model, year } = car;

//   url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
//   url.searchParams.append('make', make);
//   url.searchParams.append('modelFamily', model.split(" ")[0]);
//   url.searchParams.append('zoomType', 'fullscreen');
//   url.searchParams.append('modelYear', `${year}`);
//   // url.searchParams.append('zoomLevel', zoomLevel);
//   url.searchParams.append('angle', `${angle}`);

//   return `${url}`;
// }
// export default generateCarImageUrl; 

// export const updateSearchParams = ({type,value}) =>{
// 	const searchParams = new URLSearchParams(window.location.search);

// 	searchParams.set(type,value)
	
// 	const newPathname =`${window.location.pathname} ? ${searchParams.toString()}`

// 	return newPathname;
// }

export const calculateCarRent = (city_mpg, year) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

async function updateSearchParams(type, value){
  // Get the current URL search params
  let searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  let newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchCars(filters) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers = {
	'X-RapidAPI-Key': '7fa18a11damshf63e98804a2478ep193b17jsn879c7d351575',
	'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}

export const generateCarImageUrl = (car, angle) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 