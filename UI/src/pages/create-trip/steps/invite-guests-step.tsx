import { ArrowRight, UserRoundPlus } from "lucide-react"

interface InviteGuestsStepProps{
    openGuestModal: ()=> void;
    emailsToInvite: string[];
    openConfirmTripModal: ()=> void;
}

function InviteGuestsStep({
    openGuestModal,
    emailsToInvite,
    openConfirmTripModal
}: InviteGuestsStepProps){
    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-5">
              <button
                type="button"
                onClick={openGuestModal}
                className="flex items-center gap-2 flex-1"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                {emailsToInvite.length > 0 ? (
                  <span className="text-lg text-zinc-400 flex-1 text-left">
                    {emailsToInvite.length} pessoa(s) convidada(s)
                  </span>
                ) : (
                  <span className="text-lg text-zinc-400 flex-1 text-left">
                    Quem estará na viagem?
                  </span>
                )}
              </button>

              <div className=" w-px h-6 bg-zinc-800" />

              <button
                onClick={openConfirmTripModal}
                className="bg-lime-400 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-300"
              >
                Confirmar Viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
    )
}

export default InviteGuestsStep