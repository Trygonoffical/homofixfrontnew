
import DataPage from './data';
import { useRouter } from 'next/navigation';


// Use async to fetch data dynamically or manipulate the params
export async function generateMetadata({ params }) {
  const baseUrl = 'https://www.homofixcompany.com';
  const decodedSlug = decodeURIComponent(params.slug);
  const encodedSlug = encodeURIComponent(decodedSlug.replace(/&/g, 'and'));
  const canonicalUrl = `${baseUrl}/category/${encodedSlug}`;
  // Extract params to create a dynamic title and description
  const { slug } = params; // Assuming the param is called 'slug', adjust based on your URL structure
  // const router = useRouter()
  // const currentUrl = `${window.location.href}`;
  let dynamicTitle = `${slug}`; // Fallback title
  let dynamicDescription = ``; // Fallback description

  // Customize the title and description based on the category or params
  switch (decodedSlug) {
    case 'AC-Repair-and-Service':
      dynamicTitle = 'Fast & Affordable AC Service from Industry Experts. Book Now!';
      dynamicDescription = 'Facing AC issues? Book expert repair, servicing, and gas refill with HomOfix Company now! Quick, affordable, and professional solutions—just a tap away.';
      break;
    case 'Washing-Machine-Repair':
      dynamicTitle = 'Book Expert Washing Machine Repair Services Right at Your Doorstep.';
      dynamicDescription = 'Washing machine not working? Book reliable technicians for quick doorstep repair with HomOfix Company. Affordable, expert service—tap to schedule now!';
      break;
    case 'Refrigerator-Repair':
      dynamicTitle = 'Quick Fridge Repair by Skilled Experts with HomOfix Company';
      dynamicDescription = 'Facing fridge issues? HomOfix Company’s trusted experts are Ready to solve your problem. Book reliable single & double door fridge repair today!';
      break;
    case 'Geyser-Repair':
      dynamicTitle = 'trusted geyser repair at home. Quick service, experienced pros—Tap now to book your repair!';
      dynamicDescription = 'HomOfix Company offers expert geyser service—repair, maintenance & installation. 100% verified pro technicians. Book now for fast support!';
      break;
    case 'Television-Repair':
      dynamicTitle = 'Trusted Television Repair Service–Book with HomOfix Company!';
      dynamicDescription = 'HomOfix Company offers expert LCD, LED & Smart TV repair. With Skilled professionals, doorstep service & easy booking. Tap now to schedule!';
      break;
    case 'Microwave-Repair':
      dynamicTitle = 'Book Best Microwave Repair by Verified Experts at HomOfix.';
      dynamicDescription = 'Don’t let a faulty microwave disrupt your day, get it repaired with Experts of HomOfix Company offer expert repair at home—Book your service now!';
      break;
    case 'Chimney-Repair':
      dynamicTitle = 'Expert Chimney Repair service at Your Doorstep – Book Now!';
      dynamicDescription = 'Need expert chimney repair? HomOfix Company brings skilled professionals to your doorstep. Reliable, fast & affordable service—Book now';
      break;
    case 'Water-Purifier-Repair':
      dynamicTitle = 'Book chimney repair from trusted experts with HomOfix!';
      dynamicDescription = 'Ensure 100% pure drinking water with Homofix Company’s expert water purifier service. Trusted technicians & quality parts. Book your service now!';
      break;
    case 'Bathroom-Cleaning':
      dynamicTitle = 'Professional Bathroom Cleaning & Deep Cleaning Service';
      dynamicDescription = 'Book bathroom cleaning service near me with deep cleaning, classic cleaning, and professional bathroom cleaning by experts. Sparkling washrooms guaranteed.';
      break;
    case 'Kitchen-Cleaning':
      dynamicTitle = 'Top Kitchen Cleaning Service for Your Home by Experts';
      dynamicDescription = 'Experience the Top Kitchen Cleaning Service for Your Home by Experts. Get deep cleaning, stain removal, and a hygienic kitchen with trained professionals.';
      break;
    case 'Sofa-Cleaning':
      dynamicTitle = 'Top Sofa Cleaning Service Near Me | Book Online Now';
      dynamicDescription = 'Experience the Top Sofa Cleaning Service Near Me | Book Online Now for expert deep cleaning of sofas, cushions, and upholstery by trained professionals.';
      break;
    case 'Full-Home-Cleaning':
      dynamicTitle = 'Affordable Home Cleaning Services at your doorstep';
      dynamicDescription = 'Get Affordable Home Cleaning Services at your doorstep for deep, professional, and hassle-free cleaning. Book online now and enjoy a sparkling clean home.';
      break;
    case 'Bungalow-Cleaning':
      dynamicTitle = 'Professional Bungalow Cleaning Service at your Doorstep';
      dynamicDescription = 'Ensure your Villa stays Spotless & Stainless with our Professional Villa Cleaning Services in Delhi NCR and Kanpur. We offer Bungalow cleaning & villa cleaning';
      break;
    default:
      dynamicTitle = `Book Top-Rated Home Services. Fast,Affordable & At Your Door! `;
      dynamicDescription = 'Fix it with HomOfix Company! Get skilled professionals for AC Service, cleaning and more–delivered to your doorstep.Book & experience hassle-free Home care!';
      break;
  }
  

  return {
    title: dynamicTitle,
    description: dynamicDescription,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}


const SubcategoryPage = ({ params } ) => {

  return (
    <DataPage params={params} />
  )
  
}
const slugify = (text) => {
  return text.replace(/-/g, ' ');
};


export default SubcategoryPage;