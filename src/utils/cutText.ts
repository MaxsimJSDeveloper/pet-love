const cutText = (text: string, maxLength: number, withDots?: boolean) => {
  if (text.length > maxLength) {
    const truncated = text.slice(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(" ");

    if (lastSpaceIndex > 0) {
      return withDots
        ? truncated.slice(0, lastSpaceIndex) + "..."
        : truncated.slice(0, lastSpaceIndex);
    }

    return withDots ? truncated + "..." : truncated;
  }
  return text;
};

export default cutText;
