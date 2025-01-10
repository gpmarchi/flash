export default function flash() {
  return (
    <div className="bg-gradient-to-t from-spindle-900 to-spindle-500 h-screen text-bunker-50 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-evenly px-6 py-8">
        <div className="space-y-4">
          <span className="text-xl leading-heading font-bold">
            Fundamentos do JavaScript
          </span>

          <div className="flex items-center gap-3">
            <div className="h-3 flex-1 bg-bunker-700 rounded-md">
              <div className="h-3 rounded-md bg-bunker-200 w-3/4" />
            </div>
            <span className="text-sm font-bold">8/16</span>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-lg bg-bunker-100 px-5 py-6 mx-6 z-20">
            <p className="text-geyser-800 leading-base text-center min-h-[416px] flex justify-center items-center">
              Método utilizado para percorrer um array e criar um novo array a
              partir do original com possíveis modificações.
            </p>
          </div>

          <div className="z-10 rounded-lg bg-bunker-100/60 mx-6 left-6 right-6 absolute h-20 -bottom-4" />
        </div>
      </div>
      <button className="bg-bunker-100 text-bunker-500 py-8 w-full font-bold uppercase hover:bg-bunker-50/90">
        Revelar resposta
      </button>
    </div>
  )
}
