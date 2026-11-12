import './pageLoader.scss';

const PageLoader = () => (
    <div className="page-loader" role="status" aria-live="polite">
        <div className="page-loader__box">
            <svg
                className="page-loader__globe"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                aria-hidden="true"
                focusable="false"
            >
                <circle cx="50" cy="50" r="40" />
                <ellipse cx="50" cy="50" rx="20" ry="40" />
                <line x1="10" y1="50" x2="90" y2="50" />
                <line x1="50" y1="10" x2="50" y2="90" />
                <circle className="page-loader__orbit" cx="50" cy="50" r="46" />
            </svg>

            <p className="page-loader__brand">BAVIONA GROUP</p>

            <div className="page-loader__bar">
                <span />
            </div>

            <span className="page-loader__sr">Loading...</span>
        </div>
    </div>
);

export default PageLoader;