import useLoginModal from '@/hooks/useLoginModal'
import useRegisterModal from '@/hooks/useRegisterModal'


import React, { useCallback, useState } from 'react'
import Input from '../Input';
import Modal from '../Modal';

const RegisterModal = () => {
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);


            registerModal.onClose()
        } catch (error) {
            console.log(error) 
        } finally {
            setIsLoading(false)
        }
    }, [registerModal])

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Input
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}
            />
            <Input
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                disabled={isLoading}
            />
            <Input
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    )

    const footerContent = (
        <div className='text-neutral-400 text-center mt-4'>

            <p>Already have an account ?
                <span className='
                text-white
                cursor-pointer
                hover:underline
                '> Sign in</span>
            </p>
        </div>
    )
  return (
    <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Create an account"
        actionLabel="Regsiter"
        onClose={registerModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
    />
  )
}

export default RegisterModal