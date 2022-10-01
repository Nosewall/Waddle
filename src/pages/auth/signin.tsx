import { NextPage } from 'next';
import { AppProviders } from 'next-auth/providers';
import { getProviders, signIn } from 'next-auth/react';

const SignIn: NextPage<{ providers: AppProviders }> = ({ providers }) => {
    return (
        <div>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    );
};

export const getServerSideProps = async () => {
    const providers = await getProviders();
    return {
        props: {
            providers,
        },
    };
};

export default SignIn;
