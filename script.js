
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.station-item').forEach(item => {
    const actionIcon = item.querySelector('.station-action-icon');
    if (!actionIcon) {
      return;
    }
    item.addEventListener('mouseenter', () => {
      actionIcon.style.transform = 'translateX(5px)';
    });
    item.addEventListener('mouseleave', () => {
      actionIcon.style.transform = 'translateX(0px)';
    });
  });
});
