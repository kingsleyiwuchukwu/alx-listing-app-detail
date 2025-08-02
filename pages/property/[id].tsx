import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div>
      <PropertyDetail property={property} />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mt-8">Booking</h2>
        <BookingSection price={property.price} />
        <h2 className="text-3xl font-bold mt-8">Reviews</h2>
        <ReviewSection reviews={property.reviews} />
      </div>
    </div>
  );
}