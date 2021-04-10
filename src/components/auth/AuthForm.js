import './AuthForm.css';

export default function AuthForm({ children, onSubmit }) {
    return (
        <div className="login-container">
            <div className="login-box">
                <form onSubmit={onSubmit}>
                    <img
                        className="mb-4"
                        src="https://s4.thcdn.com//design-assets/images/licensed-images/rickandmorty.png"
                        alt=""
                        width="200"
                        height="200"
                    />
                    {children}
                </form>
            </div>
        </div>
    );
}
