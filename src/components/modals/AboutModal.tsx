import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Sobre wordle.cl" isOpen={isOpen} handleClose={handleClose}>
	    <p className="text-sm text-gray-500 dark:text-gray-300">
        Este es un juego Open Source -{' '}
        <a
          href="https://github.com/SeerLite/wordle.cl"
          className="underline font-bold"
        >
          revisa el código aquí
        </a>{' '}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Basado en -{' '}
        <a
          href="https://github.com/jtraverso/wordle.cl"
          className="underline font-bold"
        >
          revisa el código aquí
        </a>{' '}
      </p>
    </BaseModal>
  )
}
