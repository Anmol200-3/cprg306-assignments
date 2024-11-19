// Import the NewItem component from the same folder
import NewItem from './new-item';

// Define the Next.js page component
export default function Page() {
  return (
    <div>
      {/* Render the NewItem component */}
      <NewItem />
    </div>
  );
}
