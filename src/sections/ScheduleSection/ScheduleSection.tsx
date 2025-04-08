import { AISection } from "./AISection/AISection";
import { EventsSection } from "./EventsSection";
import { SelectionSection } from "./SelectionSection/SelectionSection";

export const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-24 bg-white relative overflow-hidden">
      <SelectionSection />
      <EventsSection />
      <AISection />
    </section>
  );
};
