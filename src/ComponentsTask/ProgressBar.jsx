


export default function ProgressBar(params) {

    const [progress, setProgress] = useState(0);
    const [isStarted, setIsStarted] = useState(false); // Controls when the interval begins
    const [completed, setCompleted] = useState(false); // Dependent state for completion tracking



    //trigered when started and when progress
     useEffect(() => 
        {
    // Only run if the user clicked start AND progress hasn't finished
        if (!isStarted || progress >= 100) return;


        const timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 100 : prev + 2)); // Dynamic incrementor
          }, 40); 

        return () => clearInterval(timer);

  }, [isStarted, progress]);


//monitors as progress keeps on changing
   useEffect(() => {
    if (progress === 100) {
      console.log("Completed"); // Prints message to developer console log
      setCompleted(true);       // Updates dependent conditional display UI state
    }
  }, [progress]);


   // Reset helper to safely roll back all state contexts
  const handleReset = () => {
    setProgress(0);
    setIsStarted(false);
    setCompleted(false);
  };


    return (
    <div className="container mt-4" style={{ maxWidth: "500px" }}>
      <div className="card shadow-sm border-0 rounded-4 p-4 bg-white">
        <h4 className="fw-bold mb-1 text-center text-dark">🎯 Managed Trigger Task</h4>
        <p className="text-muted text-center small mb-4">Click start to initiate background hooks</p>

        {/* Visual Progress Bar Wrapper */}
        <div className="progress rounded-pill shadow-sm mb-4" style={{ height: "24px" }}>
          <div
            className={`progress-bar progress-bar-striped progress-bar-animated ${
              completed ? "bg-success" : "bg-primary"
            }`}
            role="progressbar"
            style={{ width: `${progress}%`, transition: "width 0.04s linear" }}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {progress > 5 && `${progress}%`}
          </div>
        </div>

        {/* Dynamic Status Display Banner */}
        <div className="text-center mb-4" style={{ minHeight: "45px" }}>
          {completed ? (
            <div className="p-2 bg-success-subtle text-success rounded-3 border border-success-subtle">
              🎉 <strong>Status: Completed!</strong> Check your dev console.
            </div>
          ) : isStarted ? (
            <div className="p-2 bg-light text-secondary rounded-3 border">
              ⚡ Loading data process... (<strong>{progress}%</strong>)
            </div>
          ) : (
            <div className="p-2 bg-warning-subtle text-warning-emphasis rounded-3 border border-warning-subtle">
              💤 System Status: Idle. Awaiting user start trigger...
            </div>
          )}
        </div>

        {/* Control Button Actions */}
        <div className="d-flex justify-content-center gap-2">
          {!isStarted && !completed && (
            <button
              onClick={() => setIsStarted(true)}
              className="btn btn-success btn-sm px-4 fw-semibold rounded-pill shadow-sm"
            >
              ▶️ Start Progress
            </button>
          )}

          {(isStarted || completed) && (
            <button
              onClick={handleReset}
              className="btn btn-outline-secondary btn-sm px-4 rounded-pill fw-semibold"
            >
              🔄 Reset State
            </button>
          )}
        </div>

      </div>
    </div>
  );
}


