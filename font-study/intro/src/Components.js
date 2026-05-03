import './Components.css';

export function InfoCard({ icon, title, content, detail, children, className }) {
    return(
        <div className={`info-card ${className}`}>
            <div className="info-icon-wrapper">{icon}</div>
            <div className="info-text">
                <h3>{title}</h3>
                <p>{content}</p>
                <span>{ detail }</span>

                <div className="info-child">
                    {children}
                </div>
            </div>
        </div>
    );
}

export function SkillCard({ title, percentage, color }) {
    return (
        <div className="skill-card">
            <div className="skill-info">
                <span>{title}</span>
                <span style={{ color: color }}>{percentage}%</span>
            </div>
            <div className="progress-bar-bg">
                <div 
                    className="progress-bar-fill" 
                    style={{ width: `${percentage}%`, backgroundColor: color }}
                ></div>
            </div>
        </div>
    );
}

