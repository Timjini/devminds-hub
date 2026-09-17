import { Clock, MapPin, Navigation, Phone } from "lucide-react";

export const GymLocationSection = () => {
  return (
    <section className="w-full py-16 px-4 max-w-7xl mx-auto border-t border-stone-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Address Card */}
        <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-3">
          <MapPin className="w-6 h-6 text-red-500" />
          <h3 className="font-aldrich text-lg font-bold uppercase text-stone-100">
            Notre Localisation
          </h3>
          <p className="text-stone-400 text-sm font-light">
            KBM GYM, Quartier Industriel,
            <br />
            Agadir 80000, Maroc
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-red-500 uppercase tracking-widest hover:underline pt-2"
          >
            <span>Google Maps</span>
            <Navigation className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Opening Hours Card */}
        <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-3">
          <Clock className="w-6 h-6 text-red-500" />
          <h3 className="font-aldrich text-lg font-bold uppercase text-stone-100">
            Horaires d'Ouverture
          </h3>
          <div className="text-sm font-mono text-stone-400 space-y-1">
            <p className="flex justify-between">
              <span>Lun - Sam:</span>
              <span className="text-stone-200">08:00 - 22:00</span>
            </p>
            <p className="flex justify-between">
              <span>Dimanche:</span>
              <span className="text-stone-200">09:00 - 14:00</span>
            </p>
          </div>
        </div>

        {/* Quick Contact Card */}
        <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-3">
          <Phone className="w-6 h-6 text-red-500" />
          <h3 className="font-aldrich text-lg font-bold uppercase text-stone-100">
            Contact Direct
          </h3>
          <p className="text-stone-400 text-sm font-light">
            Une question sur les tarifs ou le règlement ?
          </p>
          <a
            href="tel:+212000000000"
            className="inline-block text-lg font-mono font-bold text-stone-100 hover:text-red-500 transition-colors pt-1"
          >
            +212 6 00 00 00 00
          </a>
        </div>
      </div>
    </section>
  );
};
