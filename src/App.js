import { useState } from "react";
import "./styles.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 30;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];

    if (totalPages < 6) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            style={{
              backgroundColor: i === currentPage ? "red" : "",
              margin: "4px",
              borderRadius: "100%"
            }}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else if (currentPage < 5) {
      for (let i = 1; i <= 5; i++) {
        buttons.push(
          <button
            key={i}
            style={{
              backgroundColor: i === currentPage ? "red" : "",
              margin: "4px",
              borderRadius: "100%"
            }}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
      buttons.push(<span key="ellipsis1">...</span>);
      buttons.push(
        <button
          key={totalPages}
          style={{
            margin: "4px",
            borderRadius: "100%"
          }}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    } else if (currentPage > totalPages - 4) {
      buttons.push(
        <button
          key={1}
          style={{
            margin: "4px",
            borderRadius: "100%"
          }}
          onClick={() => handlePageChange(1)}
        >
          {1}
        </button>
      );
      buttons.push(<span key="ellipsis2">...</span>);
      for (let i = totalPages - 4; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            style={{
              backgroundColor: i === currentPage ? "red" : "",
              margin: "4px",
              borderRadius: "100%"
            }}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      buttons.push(
        <button
          key={1}
          style={{
            margin: "4px",
            borderRadius: "100%"
          }}
          onClick={() => handlePageChange(1)}
        >
          {1}
        </button>
      );
      buttons.push(<span key="ellipsis3">...</span>);
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        buttons.push(
          <button
            key={i}
            style={{
              backgroundColor: i === currentPage ? "red" : "",
              margin: "4px",
              borderRadius: "100%"
            }}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
      buttons.push(<span key="ellipsis4">...</span>);
      buttons.push(
        <button
          key={totalPages}
          style={{
            margin: "4px",
            borderRadius: "100%"
          }}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div>
      <button
        style={{
          margin: "4px",
          borderRadius: "100%"
        }}
        disabled={currentPage === 1 && true}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        &lt;
      </button>

      {renderPaginationButtons()}
      <button
        style={{
          margin: "4px",
          borderRadius: "100%"
        }}
        disabled={currentPage === totalPages && true}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        &gt;
      </button>
    </div>
  );
}
